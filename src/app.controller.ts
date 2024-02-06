import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderService } from './database/services/order.service';

@Controller("/api/v1")
export class AppController {
  constructor(private readonly appService: AppService,private readonly orderService: OrderService) {}

  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("orders")
  async getOrders(@Res() res) {
    return res.status(200).json({
      orders: await this.orderService.findAll()
    });
  }

  
}
