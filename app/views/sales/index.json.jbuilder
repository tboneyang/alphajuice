json.array!(@sales) do |sale|
  json.extract! sale, :id, :name, :quantity, :city, :country
  json.url sale_url(sale, format: :json)
end
