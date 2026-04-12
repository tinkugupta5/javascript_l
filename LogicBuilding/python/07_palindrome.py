

def is_palindrome(text):
    cleaned = ''.join(ch.lower() for ch in text if ch.isalnum())
    return cleaned == cleaned[::-1]

sample_text = "A man, a plan, a canal, Panama"
if is_palindrome(sample_text):
    print(f'"{sample_text}" is a palindrome')
else:
    print(f'"{sample_text}" is not a palindrome')
