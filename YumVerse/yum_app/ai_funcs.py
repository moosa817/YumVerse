import requests
import json
import os

# Groq API details
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
GROQ_API_KEY = os.getenv("GROQ_KEY")


def analyze_health_profile(user_health):
    """
    Uses Groq's Llama 3 model to determine maintenance calories,
    macronutrient breakdown, and recommend healthy recipes.
    """
    prompt = f"""
    The user has the following health data:
    - Height: {user_health.height_cm} cm
    - Weight: {user_health.weight_kg} kg
    - Age: {user_health.age}
    - BMI: {user_health.bmi}
    - Additional Info: {user_health.additional_info}

    Based on this data:
    1. Calculate their **maintenance calories**.
    2. Suggest a **balanced macronutrient breakdown** (Carbs, Protein, Fats).
    
    PLEASE Return the results in JSON format like AND ONLY THIS NOTHING ELSE:
    {{
        "maintenance_calories": 2200,
        "recommended_macros": {{
            "carbs": 250,
            "protein": 150,
            "fats": 80
        }},
     
    }}
    """

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {GROQ_API_KEY}",
    }

    data = {
        "model": "llama-3.3-70b-versatile",
        "messages": [{"role": "user", "content": prompt}],
    }

    response = requests.post(GROQ_API_URL, headers=headers, json=data)

    result = response.json()["choices"][0]["message"]["content"]

    print(result)

    try:
        return json.loads(result)
    except json.JSONDecodeError:
        return False
