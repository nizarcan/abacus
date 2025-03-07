export default {
  configuration_app_version: 'Версия приложения',
  configuration_about: 'О приложении',
  configuration_clear_option: 'Очистить & Сбросить приложение',
  configuration_clear_confirm_button: 'Очистить сейчас',
  configuration_clear_alert_title: 'Вы уверены?',
  configuration_clear_alert_text: 'Очистка кэша удалит:\n'
    + 'Локальные настройки\n'
    + 'Oauth Client ID & Secret\n'
    + 'URL вашего экземпляра',
  cancel: 'Отмена',
  configuration_security: 'Безопасность',
  configuration_share_feedback: 'Оставить отзыв',
  configuration_report_issue: 'Сообщить о проблеме',
  configuration_sources: 'Источник',
  configuration_debug: 'Отладка',
  configuration_get_help: 'Получить помощь',
  assetsHistoryCharts_chart_works: 'Этот график лучше всего работает с четырьмя учетными записями.',
  assetsHistoryCharts_change_preferences: 'нажмите сюда',
  assetsHistoryCharts_choose_preferences_text: 'выбрать предпочитаемые счета в настройках Firefly III:',
  assetsHistoryCharts_home_screen: 'Главный экран',
  transaction_form_description_required: 'Требуется описание.',
  transaction_form_description_short: 'Описание слишком короткое.',
  transaction_form_amount_required: 'Требуется сумма.',
  transaction_form_description_label: 'Описание',
  transaction_form_sourceAccount_label: 'Исходный счёт',
  transaction_form_destinationAccount_label: 'Счёт назначения',
  transaction_form_date_label: 'Дата',
  transaction_form_amount_label: 'Сумма',
  transaction_form_foreign_amount_label: 'Иностранная валюта',
  transaction_form_notes_label: 'Заметки',
  transaction_form_category_label: 'Категория',
  transaction_form_budget_label: 'Бюджет',
  transaction_form_tags_label: 'Теги',
  transaction_form_reset_button: 'Сброс',
  transaction_form_submit_button: 'Отправить',
  transaction_form_new_split_button: 'Добавить разделение',
  transaction_list_alert_title: 'Вы уверены?',
  transaction_list_alert_text: 'Эта транзакция будет удалена навсегда:',
  transaction_list_delete_button: 'Удалить',
  transaction_list_cancel_button: 'Отменить',
  auth_form_url_label: 'Firefly III backend URL',
  auth_form_url_help: "без '/' в конце.",
  auth_form_url_placeholder: "Firefly III backend URL (without '/' at the endбез '/' в конце)",
  auth_form_oauth_clientId: 'Oauth Client ID',
  auth_form_oauth_client_secret: 'Oauth Client Secret',
  auth_form_secrets_help_message: 'Все ключи хранятся в надежном месте.',
  auth_form_set_redirect: 'Установите URI перенаправления на:',
  auth_form_need_help: 'Нужна помощь?',
  auth_form_submit_button_initial: 'Войти',
  auth_form_submit_button_loading: 'Отправка...',
  auth_form_biometrics_lock: 'Биометрический замок',
  home_accounts: 'Счета активов',
  layout_new_update_header: 'Доступно новое обновление',
  layout_new_update_body_text: 'Вы всегда можете обновиться позже на вкладке «Настройки»..',
  layout_new_update_cancel_button: 'Отмена',
  layout_new_update_update_button: 'Обновить сейчас',

  // from version 0.31
  transaction_screen_title: 'Новая транзакция',
  navigation_home_tab: 'Главная',
  navigation_chart_tab: 'График',
  navigation_create_tab: 'Создать',
  navigation_transactions_tab: 'Транзакции',
  navigation_settings_tab: 'Настройки',
  transaction_form_type_withdraw: 'Расход',
  transaction_form_type_deposit: 'Доход',
  transaction_form_type_transfer: 'Перевод',

  // from 0.4.1
  period_switcher_monthly: 'Ежемесячно',
  period_switcher_quarterly: 'Ежеквартально',
  period_switcher_semiannually: 'Раз в полгода',
  period_switcher_yearly: 'Ежегодно',
  error_widget_title: 'Что-то пошло не так',
  home_container_error_title: 'Что-то пошло не так',
  home_container_error_description: 'Не удалось получить токен доступа',
  oauth_token_error_title: 'Что-то пошло не так',
  oauth_token_error_description: 'Не удалось получить токен доступа',
  oauth_token_info_title: 'Информация',
  oauth_token_info_description: 'Аутентификация отменена, проверьте идентификатор клиента и URL-адрес бэкэнда.',
  oauth_token_success_title: 'Успех',
  oauth_token_success_description: 'Готово безопасное соединение с вашим экземпляром Firefly III.',
  transaction_form_success_title: 'Успех',
  transaction_form_success_description: 'Транзакция создана. Нажмите здесь, чтобы перейти к списку транзакций.',
  transaction_form_error_title: 'Ошибка',
  home_header_time_range_year: 'Год',
  home_header_time_range_q: 'Q', // Put an abbreviation that best represents a quarter
  home_header_time_range_s: 'S', // Put an abbreviation that best represents a semiannual

  // from 0.6.0
  balance: 'Баланс',
  history: 'История',
  home_categories: 'Категории',
  home_net_worth: 'Чистые активы',

  // from 0.7.0
  home_budgets: 'Бюджеты',
  configuration_ui: 'Пользовательский интерфейс',
  configuration_color_mode: 'Тёмная тема',
  auth_form_personal_access_token_label: 'Personal Access Token',
  auth_use_personal_access_token: 'Используйте Personal Access Token',
  auth_external_heads_up: '❗️Если вы используете внешнего поставщика аутентификации, такого как Authelia, Keycloak, Cloudflare Tunnels и т. д., клиенты OAuth не будут работать. Вы можете использовать только токены личного доступа..',
  auth_create_new_oauth_client: 'Создайте новый клиент OAuth на вкладке OAuth здесь.:',
  auth_create_new_personal_access_token: 'Создайте новый токен личного доступа на вкладке OAuth здесь.:',
  oauth_wrong_token_error_description: 'Не удалось проверить accessToken. Повторно проверьте свой токен или URL-адрес серверной части.',
  transaction_screen_edit_title: 'Изменить транзакцию',

  // from 0.9.0
  transaction_form_foreign_currency_label: 'Иностранная валюта',
  transaction_form_group_title_label: 'Описание разделенной транзакции',
  transaction_form_group_title_placeholder: 'Название',
  transaction_form_group_title_helper: 'Если вы создаете разделенную транзакцию, должно быть глобальное описание для всех разделений транзакции..',
  configuration_review_app_ios: 'Обзор Abacus в AppStore',
  configuration_review_app_android: 'Обзор Abacus в Google Play',

  // from 0.9.2
  assets_history_chart: 'График счетов',
  balance_history_chart: 'График чистых активов',
  balance_history_chart_no_data: 'Чтобы получить доступ к этому графику, обновите FireflyIII до последней версии.',
  account_not_included_in_net_worth: '* Счёт не включен в чистую стоимость.',

  // from 0.10.0
  period: 'Период',
  currency: 'Валюта',

  home_all_accounts: 'Все счета',

  // from 0.10.3
  router_back_button: 'Назад',
  transaction_clone: 'Клонировать',
  transaction_delete: 'Удалить',

  // from 0.11.0
  configuration_credentials: 'Реквизиты',
  configuration_manage_credentials: 'Управление реквизитами',
  configuration_credentials_add_button: 'Добавить реквизиты',
  logout: 'Выход',

  // from 0.12.0
  credential_clear_confirm_button: 'Удалить',
  credential_clear_alert_title: 'Вы уверены?',
  credential_clear_cancel_button: 'Отменить',
  go_to_credentials: 'К реквизитам',

  configuration_logout_alert_title: 'Выход',
  load_more: 'Загрузить больше',

  // from X.X.X
  home_bills: 'Счета',
  bills_paid: 'Оплачено до',
  due_by: 'Срок до',
  date_unavailable: 'уведомления',
  bills_not_expected: 'Не ожидается',
  transaction_form_bill_label: 'Счёт',

  // from 0.19.0
  configuration_theme: 'Настройка',
  configuration_theme_selection: 'Изменить цветовую тему',
  configuration_theme_title: 'Цветовые темы',
};
