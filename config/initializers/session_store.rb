if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_cybele_app", domain: "(#app domain here)"
else
    Rails.application.config.session_store :cookie_store, key: "_cybele_app"
end