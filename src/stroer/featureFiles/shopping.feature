Feature: Shopping
    Feature Shopping Workflow

    Scenario: Shopping for Hats for Men
        Given Open Amazon Shopping Front Page
        Then Search for product "Hats for Men" in Product SearchBar
        When Select First Product from Search Result
        Then Add the Quantity to "2" Add Prodcut to Card
        Then Go to Cart Page
        Then Validate the Price of Product for "2" Items
        Then Reduce the Quantity to "1" Update the Cart
        Then Validate the Price of Product for "1" Items
