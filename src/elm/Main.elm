import Html exposing (li, text, ul)
import Html.Attributes exposing (class)
  
main =
  ul [class "grocery-list"]
    [ li [] [text "Pamplemousse"]
    , li [] [text "Ananas"]
    , li [] [text "Jus d'orange"]
    , li [] [text "Boeuf"]
    , li [] [text "Soupe du jour"]
    , li [] [text "Camembert"]
    , li [] [text "Jacques Cousteau"]
    , li [] [text "Baguette"]
    ]
    
    
