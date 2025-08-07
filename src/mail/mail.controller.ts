import { Controller } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";

@ApiTags("Mail - Xabar Yuborish")
@ApiBearerAuth()
@Controller("mail")
export class MailController {}
