import winston from "winston";

test("create new logger", ()=>{
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({level: "error",message: "hELLO error"})
    logger.log({level: "warn",message: "hELLO warn"})
    logger.log({level: "info",message: "hELLO info"})
    logger.log({level: "http",message: "hELLO http"})
    logger.log({level: "verbose",message: "hELLO verbose"})
    logger.log({level: "debug",message: "hELLO debug"})
    logger.log({level: "silly",message: "hELLO silly"})
    
});

test("logging with shortcut function", () => {

    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.error("Hello Error");
    logger.warn("Hello Warn");
    logger.info("Hello Info");
    logger.http("Hello HTTP");
    logger.verbose("Hello Verbose");
    logger.debug("Hello Debug");
    logger.silly("Hello Silly");

});
