module Api
    module V1 
        class DailyUpdatesController < ApplicationController
            def create
                update = DailyUpdate.new(daily_updates_params)
                if update.save 
                    render json: DailyUpdateSerializer.new(update).serialized_json
                else
                    render json: { error: update.erros.messages }, status: 422
                end
            end
            def destroy
                update = DailyUpdate.find(params[:id])
                if update.destroy 
                    head :no_content
                else
                    render json: { error: update.erros.messages }, status: 422
                end
            end

            private
            def daily_updates_params
                params.require(:daily_updates).permit(:weight, :drank_water, :ate_food, :notes)
            end
        end
    end
end
