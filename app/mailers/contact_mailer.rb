class ContactMailer < ApplicationMailer
  default to: "abdulqudoos682@gmail.com"

  def contact_email(name, email, phone, message)
    @name = name
    @user_email = email
    @phone = phone
    @message = message

    mail(from: email, subject: "New Contact Form Submission")
  end
end
