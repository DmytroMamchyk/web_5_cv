const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');
const { Resend } = require('resend'); // Використовуємо Resend замість Nodemailer
const path = require('path');
require('dotenv').config({ path: './.env' });

const app = new Koa();
const router = new Router();
const resend = new Resend(process.env.RESEND_API_KEY); // Твій ключ з resend.com

app.use(serve(path.join(__dirname, '../dist')));
app.use(bodyParser());

router.post('/api/contact', async (ctx) => {
    const { name, email, subject, message } = ctx.request.body;

    // Валідація даних [cite: 324]
    if (!name || !email || !message) {
        ctx.status = 400;
        ctx.body = { error: 'Заповніть усі обов’язкові поля!' };
        return;
    }

    try {
        // Відправка листа через Resend API 
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev', // Для тесту залишаємо так
            to: 'dmytro.mamchyk.kb.2023@lpnu.ua', // Твоя пошта
            subject: subject || 'Новий відгук з сайту',
            html: `
                <p><strong>Ім'я:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Повідомлення:</strong></p>
                <p>${message}</p>
            `
        });

        ctx.status = 200;
        ctx.body = { success: 'Відгук успішно надіслано!' };
    } catch (error) {
        ctx.status = 500;
        ctx.body = { error: 'Помилка при відправці через Resend' };
    }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Сервер Koa з Resend працює на http://localhost:3000');
});