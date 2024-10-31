import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logging with daily rotate file", () => {

    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename: "app-%DATE%.log", 
                zippedArchive: true, // untuk merubah ke zip file
                maxSize: "100m", // ukuran maksimal file (100mb)
                maxFiles: "14d" // durasi file di keep (14 hari)
            })
        ]
    });

    for (let i = 0; i < 100000; i++) {
        logger.info(`Hello World ${i}`);
    }

});