const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description("Mongo DB url"),
    JWT_SECRET: Joi.string().required().description("JWT secret key"),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
      .default(30)
      .description("minutes after which access tokens expire"),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number()
      .default(30)
      .description("days after which refresh tokens expire"),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description("minutes after which reset password token expires"),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description("minutes after which verify email token expires"),
    // SMTP_HOST: Joi.string().description("server that will send the emails"),
    // SMTP_PORT: Joi.number().description("port to connect to the email server"),
    // SMTP_USERNAME: Joi.string().description("username for email server"),
    // SMTP_PASSWORD: Joi.string().description("password for email server"),
    // EMAIL_FROM: Joi.string().description(
    //   "the from field in the emails sent by the app"
    // ),
    // SENDGRID_API_KEY: Joi.string().required().description("SENDGRID_API_KEY"),
    // SEND_GRID_WELCOME_EMAIL_TEMPLATE_ID: Joi.string().required().description("Send Grid welcome email template id."),
    // SEND_GRID_FORGET_PASSWORD_EMAIL_TEMPLATE_ID: Joi.string().required().description("Send Grid forget password email template id."),
    // SEND_GRID_SHOP_SUCCESSFULLY_CREATED_EMAIL_TEMPLATE_ID: Joi.string().required().description("Send Grid shop created successfully email template id."),
    // TWILIO_ACCOUNT_SID: Joi.string().required().description("Twilio account SID"),
    // TWILIO_AUTH_TOKEN: Joi.string().required().description("Twilio auth token"),
    // TWILIO_NUMBER: Joi.string().required().description("Twilio number"),
    // S3_ACCESS_KEY: Joi.string().required().description("S3 Access key"),
    // S3_SECRET_KEY: Joi.string().required().description("S3 Secret key"),
    // S3_BUCKET_PATH: Joi.string().required().description("S3 Bucket path"),
    // S3_BUCKET_REGION: Joi.string().required().description("S3 Bucket Region")
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL + (envVars.NODE_ENV === "test" ? "-test" : ""),
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    },
  },

  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes:
      envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },

  // email: {
  //   sendGridApiKey: envVars.SENDGRID_API_KEY,
  //   from: envVars.EMAIL_FROM,
  //   sendGridWelcomeEmailTemplateId: envVars.SEND_GRID_WELCOME_EMAIL_TEMPLATE_ID,
  //   sendGridForgetPasswordEmailTemplateId: envVars.SEND_GRID_FORGET_PASSWORD_EMAIL_TEMPLATE_ID,
  //   sendGridShopCreatedEmailTemplateId: envVars.SEND_GRID_SHOP_SUCCESSFULLY_CREATED_EMAIL_TEMPLATE_ID
  // },

  // twilio: {
  //   twilioAccountSID: envVars.TWILIO_ACCOUNT_SID,
  //   twilioAuthToken: envVars.TWILIO_AUTH_TOKEN,
  //   twilioNumber: envVars.TWILIO_NUMBER
  // },

  // aws: {
  //   s3: {
  //     accessKey: envVars.S3_ACCESS_KEY,
  //     secretKey: envVars.S3_SECRET_KEY,
  //     bucketPath: envVars.S3_BUCKET_PATH,
  //     bucketRegion: envVars.S3_BUCKET_REGION
  //   }
  // }
};
