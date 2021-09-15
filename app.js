const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });
require('dotenv').config();

(async () => {
    client.on('ready', async () => {
        await client.setActivity({

            // buttons: [{label : "Сайт" , url : "http://anni-bot.ru"}, {label : "Добавить" , url : "http://anni-bot.ru/add"}], // Кнопки
            state: "Сделай свой сервер лучше!", // Описание
            details: "Anni - Дискорд бот 🏮", // Заголовок
            startTimestamp: new Date(), // Время
            largeImageKey: "anni", // Изображение
            largeImageText: "Anni bot", // Текст над изображением
            // smallImageKey: "", // Иконка
            // smallImageText: "" // Описание иконки

        }).catch(err => console.log(any(err)));
    });

    console.log("\x1b[34m", "Статус запущен!");
    console.log("\x1b[33m%s\x1b[0m", "Что бы убрать статус. Нажмите: Ctrl+Z")
    await client.login({ clientId: process.env.ClientID }).catch(console.error);
    
})();