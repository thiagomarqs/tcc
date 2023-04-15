package br.mackenzie.tcc.dto;

import com.google.gson.annotations.SerializedName;

public record SiteVerifyResponse(
	boolean success,
	String challenge_ts,
	String hostname,
	
	@SerializedName("error-codes")
	String[] errorCodes,
	
	String action,
	String cdata
) {}