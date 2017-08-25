class AddAttachmentAvatarToBnbs < ActiveRecord::Migration
  def self.up
    change_table :bnbs do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :bnbs, :image
  end
end
