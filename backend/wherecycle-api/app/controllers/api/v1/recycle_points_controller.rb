class Api::V1::RecyclePointsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User, except: [:index]
  before_action :set_recycle_point, only: [:destroy]
  def index
    @recycle_points = policy_scope(RecyclePoint.all)
  end

  def create
    @recycle_point = RecyclePoint.new(recycle_point_params)
    @recycle_point.user = current_user
    authorize @recycle_point
    if @recycle_point.save
      render json: {status: :created, data: @recycle_point}
    else
      render_error
    end
  end

  def destroy
    authorize @recycle_point
    @recycle_point.destroy
    head :no_content
  end

  private

  def set_recycle_point
    @recycle_point = RecyclePoint.find(params[:id])
    authorize @recycle_point
  end

  def recycle_point_params
    params.require(:recycle_point).permit(:location, :category)
  end

  def render_error
    render json: { errors: @recycle_point.errors.full_messages }, status: :unprocessable_entity
  end
  
end