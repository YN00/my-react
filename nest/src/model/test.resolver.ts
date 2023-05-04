import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Test')
export class TestResolver {
  @Query()
  async getTest() {
    return [
      {
        testId: 'steve.kim',
        testName: 'Steve Kim',
        testNumber: '010-4007-7489',
        testEmail: 'steve.kim@aimatics.ai',
      },
    ];
  }
}
