import unittest
import os
import re

class TestSiteIntegrity(unittest.TestCase):
    def test_email_routing(self):
        for root, dirs, files in os.walk('.'):
            if any(p in root for p in ['.git', 'node_modules', '__pycache__']):
                continue
            for file in files:
                if file.endswith(('.html', '.js')):
                    path = os.path.join(root, file)
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    self.assertNotIn('morne@', content.lower(), f"Found morne@ email in {path}")

    def test_team_images_exist(self):
        expected_images = [
            'assets/images/heather-strydom.jpg',
            'assets/images/karla-van-rensburg.jpg',
            'assets/images/morne-strydom.jpg',
            'assets/images/madelene-deacon.png',
            'assets/images/hero-bg.jpg',
            'assets/images/logo.png',
        ]
        for img in expected_images:
            self.assertTrue(os.path.isfile(img), f"Missing image {img}")

    def test_no_unverified_avatar_placeholders(self):
        for page in ['index.html', 'about/index.html']:
            with open(page, 'r', encoding='utf-8') as f:
                content = f.read()
            self.assertNotIn('team-text-avatar', content, f"Placeholder avatar still present in {page}")

    def test_html_parent_group_links(self):
        for root, dirs, files in os.walk('.'):
            if any(p in root for p in ['.git', 'node_modules', '__pycache__']):
                continue
            for file in files:
                if file.endswith('.html'):
                    path = os.path.join(root, file)
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    self.assertIn('https://www.the1lifegroup.com', content, f"Missing group link in {path}")

if __name__ == '__main__':
    unittest.main()
