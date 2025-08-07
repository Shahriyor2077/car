import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = request.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      throw new UnauthorizedException("Token yo'q");
    }

    try {
      const payload = this.jwtService.verify(token);
      request.user = payload; 
      return true;
    } catch (error) {
      throw new UnauthorizedException("Token noto'g'ri");
    }
  }
}
