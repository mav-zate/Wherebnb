class User < ApplicationRecord
  validates :email, :first_name, :last_name, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :profile_pic, default_url: "default_user.png"
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_one :bnb,
    class_name: :Bnb,
    foreign_key: :host_id,
    primary_key: :id

  has_many :bookings,
    class_name: :Booking,
    foreign_key: :booker_id,
    primary_key: :id

  has_many :bnbs,
    through: :bookings,
    source: :bnb

  has_many :reviews,
    class_name: :Review,
    foreign_key: :author_id,
    primary_key: :id


  attr_reader :password

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    if @user && @user.is_password?(password)
      return @user
    else
      nil
    end
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
