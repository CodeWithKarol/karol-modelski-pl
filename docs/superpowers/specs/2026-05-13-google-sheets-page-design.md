# Specyfikacja podstrony: Google Sheets + n8n

## Cel
Stworzenie dedykowanej podstrony technicznej dla usługi integracji Google Sheets z n8n, mającej na celu budowanie autorytetu (SEO techniczne, ekspercka treść) oraz generowanie leadów.

## Architektura strony
Strona będzie wykorzystywać komponenty reużywalne z istniejącego systemu, uzupełnione o dedykowane sekcje treści:

1.  **ToolsHero**: Nagłówek usługowy.
2.  **ProblemSection**: Agitacja problemów (chaos danych, błędy).
3.  **TechnicalDetails**: Sekcja techniczna (OAuth2, Webhook/Cron, Batching/Walidacja).
4.  **FaqSection**: FAQ eksperckie (skalowalność, stabilność, Excel vs Sheets).
5.  **ContactDual**: Końcowe CTA.

## Struktura sekcji technicznej (TechnicalDetails)
*   **Układ**: Grid (3 kolumny na desktop, 1 na mobile).
*   **Styl**: `bg-muted/30` dla kontenera, karty z `border-border/60` i delikatnym cieniem.
*   **Elementy**: Ikona (lucide-react), tytuł, opis.

## Zastosowane komponenty
*   `Card`, `CardContent` z `@/components/ui/card`.
*   Standardowy `Section` wrapper z `py-12 sm:py-24`.
*   Spójna kolorystyka marki (amber accents).

## Testy
Weryfikacja:
*   Poprawność renderowania komponentów.
*   Spójność typograficzna z resztą strony.
*   Responsywność gridów (mobile/desktop).
