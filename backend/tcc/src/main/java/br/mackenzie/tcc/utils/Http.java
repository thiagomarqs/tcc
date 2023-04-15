package br.mackenzie.tcc.utils;

import org.apache.hc.client5.http.classic.methods.HttpPost;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.io.entity.EntityUtils;
import org.apache.hc.core5.http.io.entity.StringEntity;

public class Http {

	public static String post(String url, String body) throws Exception {
		String result = "No content.";
		
		System.out.printf("\n[Request]: POST - URL: %s - body: %s\n", url, body);
		
		try (final CloseableHttpClient httpclient = HttpClients.createDefault()) {
            final HttpPost post = new HttpPost(url);
            
            post.setEntity(new StringEntity(body));
            post.setHeader("Content-Type", "application/json");
            
            result = httpclient.execute(post, res -> {
            	var response = EntityUtils.toString(res.getEntity());
            	
            	System.out.printf("\n[Response]: URL: %s - content: %s\n", url, response);
            	
            	return response;
            });
            
        } 
		
		return result;
	}
}