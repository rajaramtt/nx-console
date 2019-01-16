import { Controller, Get, Inject, Res } from '@nestjs/common';
import * as path from 'path';

@Controller()
export class DefaultController {
  constructor(@Inject('assetsPath') private readonly assetsPath: string) {}

  @Get('workspace*')
  workspace(@Res() res: any) {
    res.sendFile(path.join(this.assetsPath, 'index.html'));
  }

  @Get('workspaces')
  workspaces(@Res() res: any) {
    res.sendFile(path.join(this.assetsPath, 'index.html'));
  }
}
