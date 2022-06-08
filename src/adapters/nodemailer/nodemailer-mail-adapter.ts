import { MailAdapter, sendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "25cf25dbd995e2",
		pass: "84609496cdd054",
	},
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: sendMailData) {
		await transport.sendMail({
			from: "Equipe Feedget <oi@feedget.com>",
			to: "Igor Barreto <igor@gmail.com>",
			subject,
			html: body,
		});
	}
}
