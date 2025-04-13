import json
import csv

# Simulated Gemini LLM response generator
def get_decision_and_keywords(title, description):
    # Simulated logic; in real use, replace with Gemini API call
    combined = f"{title} {description}".lower()
    keywords = sorted(set(combined.split()), key=lambda x: -combined.count(x))
    top_keywords = [kw for kw in keywords if len(kw) > 4][:3]
    return "Include" if "student" in combined or "community" in combined else "Skip", top_keywords + [""] * (3 - len(top_keywords))

# Load JSON
with open("OneTimeRuns/tamu_organizations.json", "r") as f:
    orgs = json.load(f)

# Write CSV
with open("OneTimeRuns/tamu_organizations.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["title", "description", "decision", "keyword1", "keyword2", "keyword3"])
    
    for org in orgs:
        title = org.get("name", "")
        desc = org.get("description", "")
        decision, keywords = get_decision_and_keywords(title, desc)
        writer.writerow([title, desc, decision] + keywords)
