# Dashboard

`/`
- statystyki dzisiejszych zamówień (zdalne i lokalne)
- lista rezerwacji i eventów zaplanowanychc na dzisiaj

# Logowanie

`/login`
- pola na login i hasło
- guzik logowania (link do dashboardu)

#  Table Availibiliy

`/tables`
 -  wybór daty i godziny
 -  tabele z listą rezerwacji oraz wydarzeń
 -  każda kolumna będzie jednym stolikiem a każdy wiersz blokiem 30 minut
 -  ma przypominać widok tygodnia w kalendarzu googla, gdzie w kolumnach zamiast dni są rózne stoliki
 -  po kliknieciu rezerwacji lub  eventu, przechodzimy na strone szczegółów

`/tables/booking/:id`
-   musi zawierać wszystkie informacje dotyczące rezerwacji
-   umożliwia edycjie i zapisanie zmian

`/tables/booking/new`
- analogiczie do powyżej, bez początkowych informacji

`/tables/events/:id`
-   musi zawierać wszystkie informacje dotyczące rezerwacji
-   umożliwia edycjie i zapisanie zmian

`/tables/events/new`
- analogiczie do powyżej, bez początkowych informacji

# Waiter View

`/waiter`
- Musi zawierać tabele która w wierszach będzie wyświetlała stoliki w kolumnach rózne rodzaje informacji (status, czas od ostatniej aktywności)
- W ostatniej kolumnie dostępne akcje dla danego stolika

`/waiter/order/new`
- numer stolika (edytowalny)
- menu produktów
- opcje wybranego produktu
- zamówienie czyli (zamówione produkty z opcjami i ceną)
- kwotę zamówienia

`/waiter/order/:id`
- jak powyżej


# Kitchen View

`/kitchen`
- wyświetla listę zamówień w kolejności ich złożenia
- Lista musi zawierać numer stolika lub zamówienia zdalnego oraz pełne informacje dotyczące zamówionych dań
- Na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
