from src.model import load_model_and_tokenizer, predict_entities
from src.data_processing import find_career_status, find_phone_number, extract_and_combine_entities

model, tokenizer = load_model_and_tokenizer()
id2tag = {id: tag for tag, id in enumerate(tag_list)}  # tag_list는 사전에 정의되어 있어야 합니다.

text = "25/ 김준호 /서초구 거주/경력:유/전화번호:010-0000-0000"
predicted_entities = predict_entities(text, model, tokenizer, id2tag)
entities_combined = extract_and_combine_entities(predicted_entities)
entities_combined["career"] = find_career_status(text)
entities_combined["phone_number"] = find_phone_number(text)

print(entities_combined)
