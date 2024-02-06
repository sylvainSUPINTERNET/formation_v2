import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderService } from './services/order.service';
import { OrderSchema } from './schemas/order.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(), // must be first to load env variables
        
        MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`),
        MongooseModule.forFeature([
            { name: 'Order', schema: OrderSchema }
        ]),

    ],
    providers: [
        OrderService,  
    ],
    exports: [
        OrderService
    ]
  })
export class DatabaseModule {}


