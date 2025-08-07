
import { Module } from "@nestjs/common";
import { MailService } from "./mail.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";
import { join } from "path";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get<string>("MAIL_HOST") || "smtp.gmail.com",
          port: config.get<number>("MAIL_PORT") || 587,
          secure: false,
          auth: {
            user: config.get<string>("MAIL_USER") || "zshahriyor40@gmail.com",
            pass: config.get<string>("MAIL_PASS") || "mksdeausyueucyaa",
          },
        },
        defaults: {
          from: `"Car_rental" <${config.get<string>("MAIL_USER") || "zshahriyor40@gmail.com"}>`,
        },
        template: {
          dir: join(process.cwd(), "src/mail/templates"), 
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
