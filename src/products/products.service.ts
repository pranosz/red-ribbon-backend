import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto) {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.updateOne(updateProductDto).exec();
  }

  async remove(id: string) {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}
