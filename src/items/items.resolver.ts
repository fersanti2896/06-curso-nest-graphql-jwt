import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity';
import { CreateItemInput, UpdateItemInput } from './dto/inputs';
import { IdentificadorArgs } from './dto/args';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Mutation(() => Item)
  async createItem(
    @Args('createItemInput') createItemInput: CreateItemInput
  ): Promise<Item> {
    return this.itemsService.create( createItemInput );
  }

  @Query(() => [ Item ], { name: 'items' })
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Query(() => Item, { name: 'item' })
  async findOne( @Args() { id }: IdentificadorArgs ): Promise<Item> {
    return this.itemsService.findOne({ id });
  }

  @Mutation(() => Item)
  updateItem(
    @Args('updateItemInput') updateItemInput: UpdateItemInput
  ): Promise<Item> {
    return this.itemsService.update( updateItemInput.id, updateItemInput );
  }

  @Mutation(() => Item)
  removeItem( @Args() { id }: IdentificadorArgs ): Promise<Item> {
    return this.itemsService.remove({ id });
  }
}
