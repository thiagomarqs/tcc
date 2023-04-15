package br.mackenzie.tcc.model;

public record SiteVerifyResponse(
	boolean success,
	String challenge_ts,
	String hostname,
	String[] errorCodes,
	String action,
	String cdata
) {}