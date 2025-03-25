class HomeController < ApplicationController
  def index
    @projects = Project.all
  end

  def project_detail
    @project = Project.find(params[:id])
  end

  def send_email
    name = params[:name]
    email = params[:email]
    phone = params[:phone]
    message = params[:message]

    ContactMailer.contact_email(name, email, phone, message).deliver_now
    flash[:notice] = "Your message has been sent successfully!"
    redirect_to root_path
  end

end
