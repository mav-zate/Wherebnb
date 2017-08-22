class Api::UsersController < ApplicationController
  def create
    debugger
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: ['Email already taken or password is too short'], status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :language, :country, :password)
  end
end
