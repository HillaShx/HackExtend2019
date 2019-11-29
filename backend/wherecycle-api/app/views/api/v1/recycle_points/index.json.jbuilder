json.array! @recycle_points do |recycle_point|
  json.extract! recycle_point, :id, :category, :location
end