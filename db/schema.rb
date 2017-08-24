# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170824152625) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bnbs", force: :cascade do |t|
    t.string   "title",               null: false
    t.integer  "host_id",             null: false
    t.float    "lat",                 null: false
    t.float    "lng",                 null: false
    t.text     "general_description"
    t.text     "space_description"
    t.text     "side_notes"
    t.integer  "accomodation_count",  null: false
    t.decimal  "price",               null: false
    t.decimal  "security_deposit",    null: false
    t.decimal  "cleaning_fee",        null: false
    t.decimal  "weekly_discount",     null: false
    t.decimal  "monthly_discount",    null: false
    t.boolean  "wifi",                null: false
    t.boolean  "internet",            null: false
    t.boolean  "kitchen",             null: false
    t.boolean  "parking",             null: false
    t.boolean  "essentials",          null: false
    t.boolean  "pets_allowed",        null: false
    t.boolean  "smoking_allowed",     null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.integer  "rating",              null: false
    t.integer  "bed_count",           null: false
    t.string   "room_type",           null: false
    t.string   "home_type",           null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.integer  "booker_id",  null: false
    t.integer  "bnb_id",     null: false
    t.date     "start_date", null: false
    t.date     "end_date",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bnb_id", "booker_id"], name: "index_bookings_on_bnb_id_and_booker_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "bnb_id",        null: false
    t.integer  "author_id",     null: false
    t.text     "body",          null: false
    t.integer  "accuracy",      null: false
    t.integer  "communication", null: false
    t.integer  "cleanliness",   null: false
    t.integer  "location",      null: false
    t.integer  "check_in",      null: false
    t.integer  "value",         null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "language"
    t.string   "country"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
  end

end
