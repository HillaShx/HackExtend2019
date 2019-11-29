class RecyclePointPolicy < ApplicationPolicy

  def create?
    true
  end

  def destroy?
    self.user == record.user
  end

  class Scope < Scope
    def resolve
      scope
    end
  end
end
