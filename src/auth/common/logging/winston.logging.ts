import { utilities } from "nest-winston";
// import winston from "winston";
import * as winston from "winston";

export const winstonConfig = {
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        // winston.format.label({label: "Car-Rental"}),
        winston.format.timestamp(),
        utilities.format.nestLike("Car-Rental")
        // winston.format.printf(({level, message, label, timestamp})=>{
        //     return `${timestamp} [${label}] ${level}: ${message}`;
        // })
      ),
    }),
    new winston.transports.File({
        filename: "logs/combine.log",
        level: "info",
        format: winston.format.combine(
            winston.format.label({label: "Car-Rental"}),
            winston.format.timestamp(),
            winston.format.json()
        ),
    }),
    // Productions
    new winston.transports.File({
        filename: "logs/error.log",
        level: "error",
        format: winston.format.combine(
            winston.format.label({label: "Car-Rental"}),
            winston.format.timestamp(),
            winston.format.json()
        )
    })
  ],
};
