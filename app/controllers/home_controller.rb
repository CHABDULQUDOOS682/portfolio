class HomeController < ApplicationController
  def index
    @projects = Project.all
  end

  def project_detail
    @project = Project.find(params[:id])
  end

end
