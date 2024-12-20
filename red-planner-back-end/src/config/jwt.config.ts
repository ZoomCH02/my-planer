import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'
import { config } from 'process'

export const getJwtConfig = async (
    ConfigService: ConfigService
): Promise<JwtModuleOptions> => ({
    secret: ConfigService.get('JWT_SECRET')
})