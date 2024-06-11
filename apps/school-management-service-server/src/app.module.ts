import { Module } from "@nestjs/common";
import { AdminModule } from "./admin/admin.module";
import { AccountantModule } from "./accountant/accountant.module";
import { SchoolFeesModule } from "./schoolFees/schoolFees.module";
import { ReportsModule } from "./reports/reports.module";
import { TeacherModule } from "./teacher/teacher.module";
import { StudentModule } from "./student/student.module";
import { ExamModule } from "./exam/exam.module";
import { ParentModule } from "./parent/parent.module";
import { AttendanceModule } from "./attendance/attendance.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AdminModule,
    AccountantModule,
    SchoolFeesModule,
    ReportsModule,
    TeacherModule,
    StudentModule,
    ExamModule,
    ParentModule,
    AttendanceModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
