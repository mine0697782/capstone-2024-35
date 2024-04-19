from src.model import load_model_and_tokenizer, predict_entities
from src.data_processing import find_career_status, find_phone_number, extract_and_combine_entities

#ssh -i /path/to/your-key.pem ubuntu@ec2-XX-XXX-XXX-XXX.compute-1.amazonaws.com
#device = torch.device('cuda:0') if torch.cuda.is_available() else torch.device('cpu')

model, tokenizer = load_model_and_tokenizer()
# KLUE NER 데이터셋 로드
dataset = load_dataset("klue", "ner")
# 태그 리스트 확인
tag_list = dataset['train'].features['ner_tags'].feature.names
# tag2id 및 id2tag 사전 생성
tag2id = {tag: id for id, tag in enumerate(tag_list)}
id2tag = {id: tag for tag, id in tag2id.items()}


text = "25/ 김준호 /서초구 거주/경력:유/전화번호:010-0000-0000"
predicted_entities = predict_entities(text, model, tokenizer, id2tag)
entities_combined = extract_and_combine_entities(predicted_entities)
entities_combined["career"] = find_career_status(text)
entities_combined["phone_number"] = find_phone_number(text)

print(entities_combined)
