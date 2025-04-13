import json
import pandas as pd


def link2path():
    path = r"C:\Users\sukan\Documents\sem2\isr\project\new\Howdy-Orgs\backend\data\Organisations_Master.csv"
    csv_data = pd.read_csv(path)
    title2img = dict(zip(csv_data["title"], csv_data["primary_key"]))
    
    with open("tamu_organizations_img.json", "r") as f:
        data = json.load(f)
        for element in data:
            title = element["name"]
            element["logo"] = f"{title2img[title]}.jpg"
    
        with open("tamu_organizations_img.json", "w") as f:
            json.dump(data, f, indent=4)

    return
        

link2path()