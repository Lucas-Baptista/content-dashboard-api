import { Injectable } from '@nestjs/common';
import { prisma } from './lib/prisma';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const author = await prisma.user.findUnique({
      where: {
        id: '6cbd600c-5243-4903-ab07-f66ef3449783',
      },
    });
    await prisma.content.create({
      data: {
        body: 'A ROLA DO AUTOR Ë SUPER GROSSA',
        title: 'SERÁ LUCAS, O ROLA ROLA GROSSA?',
        author: {
          connect: {
            id: author.id,
          },
        },
      },
    });
    return 'Hello World!';
  }
}
