class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  # GET /products
  # GET /products.json
  def index
    @products = Product.all
    respond_to do |format|
      format.json { render :json => @products }
    end
  end

  # GET /products/1
  # GET /products/1.json
  def show
    puts @product
    puts '############'
    respond_to do |format|
      format.json { render :json => @product }
    end
  end

  # GET /products/new
  def new
  end

  # GET /products/1/edit
  def edit
    respond_to do |format|
      format.json { render :json => @product }
    end
  end

  # POST /products
  # POST /products.json
  def create
    @product = Product.new(product_params)
    respond_to do |format|
      if @product.save!
        puts 'test'
        format.json { render :json => @product, status: :created}
        #format.json { render :json => @product, status: :created}
      else
        puts 'error'
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
    respond_to do |format|
      if @product.update(product_params)
        format.json { render :json => {status: 'success'}, status: :ok}
      else
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product.destroy
    respond_to do |format|
      format.json { render :json => {status: 'gelöscht'} }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_product
    @product = Product.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def product_params
    params.require(:product).permit(:name, :price, :description)
  end
end