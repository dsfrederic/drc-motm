from apiclient import discovery
from httplib2 import Http
from oauth2client import client, file, tools
import string 

inputs = [
    {
        "file_name": "./games/240325-ROCvsDRC.txt",
        "form_name": "240325 - ROC vs DRC"  
    },
    {
        "file_name": "./games/240325-ROCIIvsDRCII.txt",
        "form_name": "240325 - ROCII vs DRCII"  
    }
]


SCOPES = "https://www.googleapis.com/auth/forms.body"
DISCOVERY_DOC = "https://forms.googleapis.com/$discovery/rest?version=v1"

store = file.Storage("token.json")
creds = None
if not creds or creds.invalid:
  flow = client.flow_from_clientsecrets("credentials.json", SCOPES)
  creds = tools.run_flow(flow, store)

form_service = discovery.build(
    "forms",
    "v1",
    http=creds.authorize(Http()),
    discoveryServiceUrl=DISCOVERY_DOC,
    static_discovery=False,
)

for input in inputs:
    file_name = input["file_name"]
    form_name = input["form_name"]

    # Read input file
    with open(file_name, "r") as input_file:
        # Read text line by line. 
        data = {}
        for line in input_file:
            # Split the line into two parts
            key =  line.strip().split(" ")[0]
            value = string.capwords(line.replace(key, "").strip())
            # Add the key and value to the data dictionary
            data[key] = value

    # Sort data by key. The key is an integer, so sorting should be in numerical order
    data = dict(sorted(data.items(), key=lambda item: int(item[0])))

    ## Iterate through the data and create a list of players
    players = []
    for key in data:
        value = f"{key}. {data[key]}"
        players.append({"value": value})

    # Request body for creating a form
    NEW_FORM = {
        "info": {
            "title": form_name,
            "document_title": form_name,
        }
    }

    # Request body to add a multiple-choice question
    NEW_QUESTION = {
        "requests": [
            {
                "createItem": {
                    "item": {
                        "title": (
                            "Why did you choose your plank of the day?"
                        ),
                        "questionItem": {
                            "question": {
                                "required": True,
                                "textQuestion": {
                                    "paragraph" : True
                                },
                            }
                        },
                    },
                    "location": {"index": 0},
                }
            },
            {
                "createItem": {
                    "item": {
                        "title": (
                            "Who is your plank of the day?"
                        ),
                        "questionItem": {
                            "question": {
                                "required": True,
                                "choiceQuestion": {
                                    "type": "RADIO",
                                    "options": players,
                                    "shuffle": False,
                                },
                            }
                        },
                    },
                    "location": {"index": 0},
                }
            },
            {
                "createItem": {
                    "item": {
                        "title": (
                            "Why did you choose your man of the match?"
                        ),
                        "questionItem": {
                            "question": {
                                "required": True,
                                "textQuestion": {
                                    "paragraph" : True
                                },
                            }
                        },
                    },
                    "location": {"index": 0},
                }
            },
            {
                "createItem": {
                    "item": {
                        "title": (
                            "Who is your man of the match?"
                        ),
                        "questionItem": {
                            "question": {
                                "required": True,
                                "choiceQuestion": {
                                    "type": "RADIO",
                                    "options": players,
                                    "shuffle": False,
                                },
                            }
                        },
                    },
                    "location": {"index": 0},
                }
            },
            {
                "createItem": {
                    "item": {
                        "title": (
                            "What's your name?"
                        ),
                        "questionItem": {
                            "question": {
                                "required": True,
                                "textQuestion": {
                                    "paragraph" : False
                                },
                            }
                        },
                    },
                    "location": {"index": 0},
                }
            },

        ]
    }

    # Creates the initial form
    result = form_service.forms().create(body=NEW_FORM).execute()

    # Adds the question to the form
    question_setting = (
        form_service.forms()
        .batchUpdate(formId=result["formId"], body=NEW_QUESTION)
        .execute()
    )



    # Prints the result to show the question has been added
    form = form_service.forms().get(formId=result["formId"]).execute()

    # Read the form ID and URL
    form_url = form["responderUri"]

    print(f"{form_name}: {form_url}")
