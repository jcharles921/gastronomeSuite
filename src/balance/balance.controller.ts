import { Controller, Get } from '@nestjs/common';
import { BalanceService } from './balance.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Balance')
@Controller('balance/resto')
export class BalanceController {
  constructor(private balanceService: BalanceService) {}
  @Get()
  @ApiOperation({ summary: 'Get balance' })
  @ApiResponse({
    status: 201,
    description: 'The balance has been successfully retrieved.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getBalance() {
    return await this.balanceService.getBalance();
  }
}
