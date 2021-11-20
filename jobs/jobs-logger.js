import Pino from 'pino'

export const logger = Pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      ignore: 'pid,hostname',
      translateTime: 'yyyy-mm-dd HH:MM:ss',
      singleLine: true
    }
  }
})