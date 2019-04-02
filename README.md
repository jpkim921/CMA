# CMS

This Rails app is meant for those that want to start a Daycare/Afterschool center. It is a web app meant for parents to register themselves and their children if interested. Admin access has more privileges in order to organize the center.

Current build has Javascript and AJAX built into the Admin access.

## Getting Started

```
Make sure you have Rails setup.
Either download or fork the repo.
CD into the app directory and bundle install.
If in production, admin access should already be ready, if not run rake db:setup.
Start app by running: bundle exec thin start --ssl

Note: Need to run using thin instead of the standard rails s because the app needs https:// for OAuth.
```

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/jpkim921/CMA](https://github.com/jpkim921/CMA). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
